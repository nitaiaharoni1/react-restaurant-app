import React, { Component } from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from '../assets/home_top.jpg'
import home_sitting from '../assets/home_sitting.jpg'
import home_kitchen from '../assets/home_kitchen.jpg'
import KitchenNames from "../components/KitchenNames";
import HomeCards from "../components/HomeCards";
import CustomContainer from "../components/CustomContainer";
import ColumnsContainer from "../components/ColumnsContainer";
import Container from "react-bootstrap/Container";

class Readme extends Component {
    render() {
        return (
            <>
                <CustomParallax title='Readme' text="Nitai Aharoni's Readme" img={home_top} height='20em'/>
                <Container>
                    <article className="markdown-body entry-content p-2" itemProp="text">
                        <h1 lassName="mt-2">PROJECT BLAH BLAH </h1>
                        <h2> Requirements </h2>
                        <p>For development, you will only need Node.js installed on your environement.
                            And please use the appropriate Editorconfig plugin for your Editor
                            (not mandatory).</p>
                        <h3> Node </h3>
                        <p>Node is really easy to install &amp; now include NPM.
                            You should be able to run the following command after the installation procedure
                            below.</p>
                        <pre><code>$ node --version{"\n"}v0.10.24{"\n"}{"\n"}$ npm --version{"\n"}1.3.21{"\n"}</code></pre>
                        <h4>
                            Node installation on OS X
                        </h4>
                        <p>You will need to use a Terminal. On OS X, you can find the default terminal in
                            <code>/Applications/Utilities/Terminal.app</code>.</p>
                        <p>Please install Homebrew if it's not already done with the following command.
                        </p>
                        <pre><code>$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"{"\n"}</code></pre>
                        <p>If everything when fine, you should run</p>
                        <pre><code>brew install node{"\n"}</code></pre>
                        <h4>
                            Node installation on Linux
                        </h4>
                        <pre><code>sudo apt-get install python-software-properties{"\n"}sudo add-apt-repository ppa:chris-lea/node.js{"\n"}sudo apt-get update{"\n"}sudo apt-get install nodejs{"\n"}</code></pre>
                        <h4>
                            Node installation on Windows
                        </h4>
                        <p>Just go on official Node.js website &amp; grab the installer.
                            Also, be sure to have <code>git</code> available in your PATH, <code>npm</code> might need it.</p>
                        <hr/>
                        <h2>
                            Install
                        </h2>
                        <pre><code>$ git clone https://github.com/ORG/PROJECT.git{"\n"}$ cd PROJECT{"\n"}$ npm install{"\n"}</code></pre>
                        <h3>
                            Configure app
                        </h3>
                        <p>Copy <code>config.sample.json</code> to <code>config.json</code> then edit it with the url where you have setup:</p>
                        <ul>
                            <li>backend api</li>
                            <li>oauth like endpoint for auth</li>
                            <li>development</li>
                        </ul>
                        <h2>
                            Start &amp; watch
                        </h2>
                        <pre><code>$ npm start{"\n"}</code></pre>
                        <h2>
                            Simple build for production
                        </h2>
                        <pre><code>$ npm run build{"\n"}</code></pre>
                        <h2>
                            Update sources
                        </h2>
                        <p>Some packages usages might change so you should run <code>npm prune</code> &amp; <code>npm install</code> often.
                            A common way to update is by doing</p>
                        <pre><code>$ git pull{"\n"}$ npm prune{"\n"}$ npm install{"\n"}</code></pre>
                        <p>To run those 3 commands you can just do</p>
                        <pre><code>$ npm run pull{"\n"}</code></pre>
                        <p><strong>Note:</strong> Unix user can just link the <code>git-hooks/post-merge</code>:</p>
                        <h2>
                            Enable git hooks (unix only :/)
                        </h2>
                        <pre><code>$ npm run create-hook-symlinks{"\n"}</code></pre>
                        <h3>
                            <code>post-merge</code> (≃ <code>npm install</code>)
                        </h3>
                        <p>This hook will <code>npm prune &amp;&amp; npm install</code> each time you <code>git pull</code> something if
                            the <code>package.json</code> has been modified.</p>
                        <h3>
                            <code>pre-commit</code> (≃ <code>npm test</code>)
                        </h3>
                        <p>This hook will just ensure you will commit something not broken bye pruning npm packages not in
                            the <code>package.json</code> &amp; eventually reinstall missings/not correctly removed packages.
                            Then it will try a production build.</p>
                        <hr/>
                        <h2>
                            Languages &amp; tools
                        </h2>
                        <h3>
                            HTML
                        </h3>
                        <ul>
                            <li>Jade for some templating.</li>
                        </ul>
                        <h3>
                            JavaScript
                        </h3>
                        <ul>
                            <li>JSHint is used to prevent JavaScript error.</li>
                            <li>JSCS is used to check coding conventions.</li>
                            <li>Browserify to handle allow us to write our client-side scripts
                                with es6 syntax thanks to
                            </li>
                            <li>React is used for UI.</li>
                        </ul>
                        <h3>
                            CSS
                        </h3>
                        <ul>
                            <li>cssnext is used to write futureproof CSS for CSS vendor
                                prefix under the hood).
                            </li>
                        </ul>
                        <p><em>Autoprefixer</em> is included and use caniuse.com database to avoid
                            outdated prefixes. <em>You can forget CSS prefixes NOW.</em></p>
                        <h3>
                            Static server with Livereload
                        </h3>
                        <p>The app embed for development a static connect server with livereload plugged.
                            So each time you start the app, you get automatic refresh in the browser whenever you update a file.</p>
                    </article>
                </Container>
            </>
        );
    }
}

export default Readme;