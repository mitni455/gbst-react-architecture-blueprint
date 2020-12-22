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
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseAuthArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseAuthArchitecturePage(){
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
 * @component UseAuthExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseAuthExamplePage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleComponent />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 3
 * @component UseAuthExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseAuthExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
