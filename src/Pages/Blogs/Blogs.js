import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="question-ans">
                <h5>Difference between authorization and authentication?</h5>
                <p>Authentication is the way of verifying a right user. It works through a fixed or static password ,
                    one time pins, biometric characteristics symptoms etc. On the other hand, authorization is the  process of what a user can do or access after verify.
                    Authorization are maintained by the organizations.Authentication is the first step to verify the identify .
                    And authorization always takes place after authentication. Authentication is visible,but  authorization isn't visible.</p>
            </div>
            <div className="question-ans">
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase provides us the authentication process. It is easy to use and it provides some backend services too. 
                    It has a ready-made UI libraries, so that we can use it very easily.It supports to verify the user by many ways, like password, email, phone numbers and 
                    it provides us the verification process by social media and so on.
                    There are also some other ways to authenticate a user. And they are retina scans, voice recognition, fingerprints etc.

                    </p>
            </div>
            <div className="question-ans">
                <h5>What other services does firebase provide other than authentication?</h5>
                <p>Firebase do many things other Authentication.
                    it provides a real time data security over in firebase by determining who has read and write access to your database
                    I provides the service of firebase machine learning. It also gives us  the opportunity to host oue web application in the firebase.
                     It also provides other services like Cloud firestore, Cloud functions Emulator suite, security rules etc</p>
            </div>
        </div>
    );
};

export default Blogs;