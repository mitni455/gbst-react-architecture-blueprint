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
    ExampleLayoutPage,
    ExampleCompoundsPage,
    ExampleElementsPage,
    ExampleUseJourneyPage,
    ExampleUseFormikPage,
    ExampleUseApiPage,
    ExampleUseAuthPage,
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseJourneyArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseJourneyArchitecturePage(){
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
 * @component UseJourneyExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseJourneyLayoutPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleLayoutPage />
            </Page.Padding>
        </Page>
    )
}
export function UseJourneyCompoundsPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleCompoundsPage />
            </Page.Padding>
        </Page>
    )
}
export function UseJourneyElementsPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleElementsPage />
            </Page.Padding>
        </Page>
    )
}
export function UseJourneyUseJourneyPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleUseJourneyPage /> 
            </Page.Padding>
        </Page>
    )
}
export function UseJourneyUseFormikPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleUseFormikPage /> 
            </Page.Padding>
        </Page>
    )
}
export function UseJourneyUseApiPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleUseApiPage /> 
            </Page.Padding>
        </Page>
    )
}
export function UseJourneyUseAuthPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleUseAuthPage />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 3
 * @component UseJourneyExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseJourneyExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
