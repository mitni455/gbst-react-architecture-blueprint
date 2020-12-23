import React, { useState } from 'react';

/**
 * @requires 💅UiKit
 */
import {
    Journey,
    NextStepButton,
    PrevStepButton,
} from './uikit';
import {
    Form,
    Button,
    Col,
    InputGroup,
} from 'react-bootstrap';

/**
 * @requires 🖖LogicKit
 */
import {
    JourneyProvider,
    useJourney,
} from './logickit';

/**
 * @requires Formik 
 */
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
// const Yup = require('yup'); 

/**
 * @component ExampleUseFormikPage
 * @desc How to use hook in the wild  
 */
export function ExampleUseFormikPage() {

    const steps = [
        {
            title: 'Client Details'
        },
        {
            title: 'Application Details'
        }
    ];

    return <JourneyProvider steps={steps}>
        <ExampleUseJourney />
    </JourneyProvider>
}


function ExampleUseJourney() {

    const [journeyStore, journeyActions] = useJourney();

    /**
     * @const Forms 
     */
    const formData = {
        name: 'Mitchy',
        email: 'nick@email.com',
    };

    function validateStep1(stepValues) {
        return {
            isValid: false,
            errors: {
                email: 'FAILED! ' + stepValues.email
            }
        }
    }

    /**
     * connect the form to the journey 
     * @param {*} values - values from Journey
     * @param {*} errors - errors from Journey
     */
    function onFormChange(values, errors) {
        const stepId = 0;
        journeyActions.updateStep(stepId, values, errors);
    }

    /**
     * @step render
     */
    return (
        <Journey>
            <Journey.Nav>
                <Journey.NavStep step={0} title='Client Details' isActive />
                <Journey.NavStep step={1} title='Application Details' />
                <Journey.NavStep step={2} title='Summary' />
            </Journey.Nav>
            <Journey.Content>

                <Journey.Step step={0} validator={validateStep1}>



                    <ExampleValidationSchema onFormChange={onFormChange} initialValues={formData} />




                    <Journey.StepFooter>
                        <PrevStepButton onNextStep={journeyActions.previousStep} />
                        <NextStepButton onNextStep={journeyActions.nextStep} />
                    </Journey.StepFooter>
                </Journey.Step>

                <Journey.Step step={1}>

                    <pre className='pre-well'>
                        journeyStore:
                        {JSON.stringify(journeyStore, null, 4)}
                    </pre>

                    <Journey.StepFooter>
                        <PrevStepButton onNextStep={journeyActions.previousStep} />
                        <NextStepButton onNextStep={journeyActions.nextStep} />
                    </Journey.StepFooter>
                </Journey.Step>

                <Journey.Step step={2}>
                    Step 2

                    <Journey.StepFooter>
                        <PrevStepButton onNextStep={journeyActions.previousStep} />
                        <NextStepButton onNextStep={journeyActions.nextStep} />
                    </Journey.StepFooter>
                </Journey.Step>
            </Journey.Content>
        </Journey>
    );

}



/**
 * @namespace useFormik 
 * @component ExampleValidationSchema
 * @desc 
 */
export function ExampleValidationSchema({ onFormChange, initialValues }) {

    /**
     * @step use hook 
     * @desc 
     */
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues,
        onSubmit: submitHandler,
        validationSchema: validationHandler()
    });

    /**
     * @function submitHandler 
     * @description 
     *  callback from use form once the form has been submitted 
     *  
     */
    const [submittedData, setSubmittedData] = useState(null);
    function submitHandler(_values) {
        setSubmittedData(_values);

        /**
         * @step connect form to journey 
         * @desc 
         *      it's actually better to use this as a callback rather than useJourney directly 
         *      to make this more reusable and 'unaware' of being inside a provider 
         */
        onFormChange(values, errors);
    }

    /**
     * @constant validationSchema
     * @description Let's use yup by replacing the validation handler with validationSchema 
     * @returns {boolean} isValid - return true if valid 
     * @returns {Object} errorMsg - return a field:errorMsg if invalid  
     */
    function validationHandler() {

        return Yup.object({
            email: Yup
                .string()
                .email('Invalid email')
                .min(5, 'Must be more than 5 chars')
                .required('An email is required bro'),

            firstName: Yup
                .string()
                .required(),

            lastName: Yup
                .string()
                .required(),

            username: Yup
                .string()
                .required(),

            city: Yup
                .string()
                .required(),

            state: Yup
                .string()
                .required(),

            zip: Yup
                .string()
                .required(),

            terms: Yup
                .array()
                .required(),
                // .bool()
                // .matches(/(on|off)/, { excludeEmptyString: true })

        })

    }

    /**
     * @step render
     */
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {(touched.email &&  errors.email) && <div>❗️ {errors.email}</div>}
                    {(touched.email && !errors.email) && <div> 🤑 </div>}
                </label>
                <div>
                    <input type="submit" value='💾 Save' />
                </div>
            </form> */}

            {/*
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleEmail">

                    <Form.Label>
                        Email address
                    </Form.Label>

                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    
                    {
                        (touched.email &&  errors.email) && 
                            <Form.Text className="text-danger">
                                ❗️ {errors.email}
                            </Form.Text>
                    }
                </Form.Group>

                

                <Form.Group controlId="examplePassword">
                    <Form.Label>
                        Password
                    </Form.Label>

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId='exampleSwitch'>

                    <Form.Label>
                        Stay logged in  
                    </Form.Label>

                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Stay logged in"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            */}

            <Form noValidate onSubmit={handleSubmit}>

                {/**
                  * 
                  * @component row 
                  * 
                  **/}
                <Form.Row>

                    {/**
                     * 
                     * @component first name  
                     * 
                     **/}
                    <Form.Group as={Col} md="4" controlId="validationFormik01">

                        <Form.Label>First name</Form.Label>

                        <Form.Control
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.firstName && !errors.firstName}
                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Form.Group>


                    {/**
                     * 
                     * @component Last Name  
                     * 
                     **/}
                    <Form.Group as={Col} md="4" controlId="validationFormik02">

                        <Form.Label>Last name</Form.Label>

                        <Form.Control
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Form.Group>


                    {/**
                     * 
                     * @component Username  
                     * 
                     **/}
                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">

                        <Form.Label>Username</Form.Label>

                        <InputGroup>

                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>

                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.username}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </InputGroup>

                    </Form.Group>

                </Form.Row>


                {/**
                  * 
                  * @component row 
                  * 
                  **/}
                <Form.Row>


                    {/**
                     * 
                     * @component City  
                     * 
                     **/}
                    <Form.Group as={Col} md="6" controlId="validationFormik03">

                        <Form.Label>City</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.city}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.city}
                        </Form.Control.Feedback>

                    </Form.Group>

                    {/**
                     * 
                     * @component State  
                     * 
                     **/}
                    <Form.Group as={Col} md="3" controlId="validationFormik04">

                        <Form.Label>State</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.state}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.state}
                        </Form.Control.Feedback>

                    </Form.Group>

                    {/**
                     * 
                     * @component Zip Code  
                     * 
                     **/}
                    <Form.Group as={Col} md="3" controlId="validationFormik05">

                        <Form.Label>Zip</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            name="zip"
                            value={values.zip}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.zip}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.zip}
                        </Form.Control.Feedback>

                    </Form.Group>

                </Form.Row>

                {/**
                  * 
                  * @component Terms  
                  * 
                  **/}
                <Form.Group>
                    <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        id="validationFormik0"
                    />
                </Form.Group>

                {/**
                  * 
                  * @component Submit Button 
                  * 
                  **/}
                <Button type="submit">Submit form</Button>
            </Form>


            <section className='output hide'>
                <pre className='pre-well'>
                    Form Values:
                    {JSON.stringify(values, null, 4)}

                    Form Errors:
                    {JSON.stringify(errors, null, 4)}

                    Form Touched:
                    {JSON.stringify(touched, null, 4)}
                </pre>

                {submittedData && <>
                    <hr />
                    <h3> Submitted on 💾 Save </h3>
                    <pre className='pre-well'>
                        {JSON.stringify(submittedData, null, 4)}
                    </pre>
                </>}
            </section>
        </>
    );

}
