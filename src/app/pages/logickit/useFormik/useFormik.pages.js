import React from 'react';

/**
 * @requires Styes
 */
import './styles';

/**
 * @requires Hooks 
 */
import {
    Page,
} from '../../../../uikit';

/**
 * @requires Components
 * @description Examples 
 */
import {
    ExampleArchitecture,
    ExampleComponent,
    ExampleValidation, 
    ExampleValidationSchema,
    UiKitForm,
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseFormikArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseFormikArchitecturePage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleArchitecture />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 2 
 * @component UseFormikExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseFormikHelloWorldPage(){

    const mockFormData = {
        name: 'Mitchy',
        imgUrl: '',
        email: 'nick@email.com'
    }

    return (
        <Page >
            <Page.Padding>
                <ExampleComponent initialValues={mockFormData} />
            </Page.Padding>
        </Page>
    )
}

export function UseFormikValidationPage(){

    const mockFormData = {
        name: 'Mitchy',
        imgUrl: '',
        email: 'nick@email.com'
    }

    return (
        <Page >
            <Page.Padding>
                <ExampleValidation initialValues={mockFormData} />
            </Page.Padding>
        </Page>
    )
}

export function UseFormikValidationSchemaPage(){

    const mockFormData = {
        name: 'Mitchy',
        imgUrl: '',
        email: 'nick@email.com'
    }

    return (
        <Page >
            <Page.Padding>
                <ExampleValidationSchema initialValues={mockFormData} />
            </Page.Padding>
        </Page>
    )
}


export function UseFormikUiKitPage(){

    const mockFormData = {
        name: 'Mitchy',
        imgUrl: '',
        email: 'nick@email.com',
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: []
    }

    return (
        <Page >
            <Page.Padding>
                <UiKitForm initialValues={mockFormData} />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 3
 * @component UseFormikExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseFormikExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
