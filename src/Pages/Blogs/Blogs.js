import React from 'react';

const Blogs = () => {
    return (
        <section className='flex justify-center'>

            <div className='grid grid-cols-1 gap-4 mt-16 shadow-xl p-12 rounded-xl'>
                <div>
                    <label for="my-modal-1" class="btn modal-button btn-outline font-bold">1. How will you improve the performance of a React Application?</label>
                    <body>
                        <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                        <label for="my-modal-1" class="modal cursor-pointer">
                            <label class="modal-box relative" for="my-modal-1">
                                <h3 class="text-lg font-bold">Optimization is the number one thing that is on the mind of every dev when building any software, especially web apps. JS frameworks like Angular, React and others, have included some awesome configurations and features. Here, I’ll review the features and tricks that will help you optimize your app’s performance. Some Performance Optimization Techniques for React Apps are,<br /> 1. Using Immutable Data Structures. <br /> 2. Function/Stateless Components and React.PureComponent. <br /> 3. Multiple Chunk Files <br /> 4.Using Production Mode Flag in Webpack. <br /> 5.Dependency optimization. And more...</h3>

                            </label>
                        </label>
                    </body>
                </div>
                <div>
                    <label for="my-modal-2" class="btn modal-button btn-outline font-bold">2. What are the different ways to manage a state in a React application?</label>
                    <body>
                        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                        <label for="my-modal-2" class="modal cursor-pointer">
                            <label class="modal-box relative" for="my-modal-2">
                                <h3 class="text-lg font-bold">There are four main types of state you need to properly manage in your React apps: <br /> Local state <br /> Global state <br /> Server state <br /> URL state</h3>

                            </label>
                        </label>
                    </body>
                </div>
                <div>
                    <label for="my-modal-3" class="btn modal-button btn-outline font-bold">3. How does prototypical inheritance work?</label>
                    <body>
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <label for="my-modal-3" class="modal cursor-pointer">
                            <label class="modal-box relative" for="my-modal-3">
                                <h3 class="text-lg font-bold">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.....</h3>

                            </label>
                        </label>
                    </body>
                </div>
                <div>
                    <label for="my-modal-4" class="btn modal-button btn-outline font-bold">4. Why you do not set the state directly in React? </label>
                    <body>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="my-modal-4">
                                <h3 class="text-lg font-bold">Despite React’s popularity, one of its biggest drawbacks is its components re-rendering excessively. When developing React applications, you may have noticed that state updates don’t immediately reflect new values after being changed. React state is a plain JavaScript object that holds information that influences the output of a render. To update state in React components, we’ll use either the this.setState function or the updater function returned by the React.useState() Hook in class and function components, respectively. State updates in React are asynchronous; when an update is requested, there is no guarantee that the updates will be made immediately. The updater functions enqueue changes to the component state, but React may delay the changes, updating several components in a single pass. In React, every state update causes the component being updated to re-render. Because re-rendering is an expensive operation, making state updates synchronously can cause serious performance issues, for example, increasing load times or causing your application to crash. By batching state updates, React avoids unnecessary re-renders, boosting performance overall. </h3>

                            </label>
                        </label>
                    </body>
                </div>
                <div>
                    <label for="my-modal-5" class="btn modal-button btn-outline font-bold">5. What is a unit test? Why should write unit tests? </label>
                    <body>
                        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                        <label for="my-modal-5" class="modal cursor-pointer">
                            <label class="modal-box relative" for="my-modal-5">
                                <h3 class="text-lg font-bold">UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br /> Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</h3>

                            </label>
                        </label>
                    </body>
                </div>
            </div>

        </section >
    );
};

export default Blogs;