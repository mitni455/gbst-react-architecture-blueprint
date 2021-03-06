import React, {useState} from 'react';

/**
 * @requires Mock 
 */
import MockAdapter from 'axios-mock-adapter';

/**
 * @requires Storybook 
 */
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as booleanKnob, number as numberKnob, object as objectKnob, text as textKnob } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withConsole } from '@storybook/addon-console';

/**
 * @requires Hooks 
 */
import { useGet, usePost, usePut, usePatch, useDelete } from '..';
import { StatusEnum } from '../../useAsync';
import { useAuth, AuthProvider } from '../../useAuth';

/**
 * @namespace mock 
 */
import axios from 'axios';
const mock = new MockAdapter(axios);


/**
 * @namespace storybook 
 */
storiesOf('🖖LogicKit/hooks/04-useApi-with-useAuth', module)
    .addDecorator(withKnobs)
    .addDecorator(withNotes)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('architecture', () => {
        return <iframe
            style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
            src='http://gbst-react-patterns.surge.sh/hooks/useApi.html'
        />
    })
    .add('useApi with token from useAuth', ()=>{

        /**
         * @const Knobs 
         */
        const url = textKnob('API URL', '/api/get/stuff');
        const mockApiData = objectKnob('Mock API Data', [
            {
                hello: 'world'
            }
        ]);
        const mockWaitTime = numberKnob('Mock Wait Time', 2000);

        /**
         * @namespace mock 
         */
        mock.onGet(url).reply((req) => {
            return [200, mockApiData];
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleWithAuthProvider() {

            /**
             * @step input form
             * @desc let's create some sample login form to show if the user isn't logged in
             */
            const [username, setUsername] = useState('shukut');
            const [password, setPassword] = useState('shukut');
            const txtUsername = <input type="text" value={username} onChange={e => { setUsername(e.target.value) }} />   
            const txtPwd = <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />

            /**
             * @step useAuth to login 
             * @desc this will return a token which we can pass instantly to useGet
             */
            const [authStore, authActions] = useAuth(); 
            const token = authStore?.data?.default?.access_token;
            console.log({authStore})

            /**
             * @step use GET hook 
             * @desc the token is automagically updated via pub/sub 
             */
            const {
                status,
                data,
                error,
                cancel,
                refetch: fetch,
            } = useGet(url, mockWaitTime, token);

            /**
             * @function login handler 
             */
            function login(){
                if(!status.PENDING)
                    authActions.login(username, password);
            }

            return (<>
                {token ?
                    <>
                        <button onClick={fetch}>  
                            {status.PENDING ? <i> ✋ loading...</i> : <>🧙 GET api data </>}
                        </button>
                        <h4> Token </h4>
                        <pre> {token} </pre>

                        <h4> Data: {status} </h4>
                        <pre> {JSON.stringify(data, null, 4)} </pre>
                    </>
                    : 
                    <>
                        {txtUsername}
                        {txtPwd}
                        <button onClick={login}> 🙅 Login first </button>
                    </>
                }
            </>)

        }

        /**
         * @pattern Provider Pattern
         * @desc We need to wrap the component with the AuthProvider which uses Context to inject the auth actions and store
         * This means we can use the hook: useAuth 
         */
        return (
            <AuthProvider>
                <ExampleWithAuthProvider />
            </AuthProvider>
        );

    });
