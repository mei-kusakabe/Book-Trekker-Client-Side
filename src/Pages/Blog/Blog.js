import React from 'react';
import './Blog.css'
import AnimatedText from 'react-animated-text-content';

const Blog = () => {
    return (
        <div className='container mb-5 py-5 blog border rounded'>
            <section className="container" id="faq">
                <div className="blog-header text-center">

                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        style={{ textDecoration: 'none', color: "#EB6440" }}
                        //tag="p"
                        className="animated-paragraph display-5 fw-bold py-5"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Blog Page
                    </AnimatedText>
                    {/* <h1 className="display-5 fw-bold py-5" style={{ textDecoration: 'underline', color: "#EB6440" }}>Blog Page
                    </h1> */}
                </div>
                <section className="blog-body">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fw-bold text-black fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    What are the different ways to manage a state in a React application?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <h6 className="text-muted  text-start">
                                        <p>There are several ways to handle state in React apps. In this section, we'll look at a few of them in more detail.<br></br></p>
                                        <p><span className='fw-bold'>1. URL</span>- URLs can be used to store data, for example.
                                            The id of the currently viewed item • Filter parameters • Pagination offset and limit • Sorting data</p>
                                        <p><span className='fw-bold'>2. Web Storage</span>- The second option is to use web storage to save the state in the browser. This comes in handy when we want to keep the state between reloads and reboots. Cookies, local storage, and IndexedDB are a few examples. These are browser technologies that are native to the browser.</p>
                                        <p><span className='fw-bold'>3. Local State</span>- The third option is to use the local store state. It's useful when only one component requires the state. A toggle button, a form, </p>
                                        <p><span className='fw-bold'>4. Lifted State</span>- The lifting state prevents states from being duplicated in multiple components. It contributes to ensuring that all of our components consistently reflect the same state. We declare the state in a common parent component first, and then pass it down to child components using props. This pattern should be considered when several related components must use the same thing.</p>
                                        <p><span className='fw-bold'>5. Derived State</span>- The fifth option is to compute the new state based on the existing state, which eliminates the need to declare a state at all. If there are existing values that can be combined to provide the information we require, we can calculate it on each render rather than storing it.</p>

                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    How does prototypical inheritance work?
                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start">
                                        The ability to access object properties from another object is referred to as prototypical inheritance. To add new properties and methods to an existing object constructor, we use a JavaScript prototype. We can then instruct our JS code to take properties from a prototype. Through the use of a reference pointer function, we can reuse properties or methods from one JavaScript object to another.
                                        All JavaScript objects inherit properties and methods from prototypes in the following way:
                                        <br /><br />
                                        <p> The prototype inheritance chain is headed by Object.prototype. Object.prototype is inherited by Date objects, Array objects, and Player objects.</p>
                                        <ol><b>Date.prototype: </b> Date objects inherit from Date.prototype. </ol>
                                        <ol><b>Array.prototype: </b>Array objects descended from Array.prototype. </ol>
                                        <ol><b>Player.prototype: </b>Player objects descended from Player.prototype.</ol>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    What is a unit test? Why should we write unit tests?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start">
                                        <p><span className='fw-bold'>Unit testing - </span>
                                            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.</p>
                                        <p><span className='fw-bold'>Objective - </span>
                                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                        </p>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Difference among React vs. Angular vs. Vue?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start py-1">
                                        <table className='mx-auto'>
                                            <tr>
                                                <th>Features</th>
                                                <th>React</th>
                                                <th>Angular</th>
                                                <th>Vue</th>
                                            </tr>
                                            <tr>
                                                <td>Framework Size</td>
                                                <td>97.5k</td>
                                                <td>143k</td>
                                                <td>58.8k</td>
                                            </tr>
                                            <tr>
                                                <td>Programming Language</td>
                                                <td>Javascript</td>
                                                <td>Typescript</td>
                                                <td>Javascript</td>
                                            </tr>
                                            <tr>
                                                <td>UI Component</td>
                                                <td>React UI Tools</td>
                                                <td>In-built material techstack</td>
                                                <td>Component Libraries</td>
                                            </tr>
                                            <tr>
                                                <td>Architechture</td>
                                                <td>Component Based</td>
                                                <td>Component Based</td>
                                                <td>Component Based</td>
                                            </tr>
                                            <tr>
                                                <td>Learning Curve</td>
                                                <td>Moderate</td>
                                                <td>Steep</td>
                                                <td>Moderate</td>
                                            </tr>
                                            <tr>
                                                <td>Syntax</td>
                                                <td>Virtual DOM</td>
                                                <td>Real DOM</td>
                                                <td>Virtual DOM</td>
                                            </tr>
                                            <tr>
                                                <td>Scalability</td>
                                                <td>Component Based Approach</td>
                                                <td>Modular Development Structure</td>
                                                <td>Template Based Syntax</td>
                                            </tr>
                                            <tr>
                                                <td>Migrations</td>
                                                <td>React Codemod Script</td>
                                                <td>API Upgrade</td>
                                                <td>Migration Helper Tool</td>
                                            </tr>
                                        </table>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div >
    );
};

export default Blog;