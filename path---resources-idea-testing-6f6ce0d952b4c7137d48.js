webpackJsonp([75803907605738],{346:function(e,t){e.exports={data:{markdownRemark:{html:'<p><a href="https://www.youtube.com/watch?v=8pud0jSLWQI">Video tutorial</a></p>\n<p>The IntelliJ IDEA development environment includes the JUnit testing framework for unit testing applications written in Java. JUnit cannot natively test code written in HTML, CSS, or JavaScript, so we cannot use JUnit for testing all components of the CS361 project. The following steps will provide you with a <em>Configuration</em> within IntelliJ IDEA that will <strong>Build</strong> (compile new copies of library files and project files) and <strong>Run</strong> (executes the Ninja framework to load your code, then executes all JUnit tests within the project). JUnit executes your app only for the duration of testing, which means that you will not able to access your app via the <strong><a href="http://localhost:8080/">http://localhost:8080/</a></strong> address within the browser during testing.</p>\n<p>The following steps apply with the project open within IntelliJ IDEA (see <a href="/resources/idea-setup.md">Configuring IntelliJ IDEA and Importing Maven-based Projects</a>).</p>\n<ol>\n<li>Verify that your project contains a <code>src/test/java</code> directory that contains at least one <code>*.java</code> file containing JUnit tests. A JUnit test file can be determined by observing the statement import <code>org.junit.Test</code> at the top of the file.</li>\n</ol>\n<img src="/images/junittestdir.png" width="75%"/>\n<ol start="2">\n<li>If the <code>src/test/java</code> directory is not already marked as the <em>Test Sources Root</em> (directory is highlighted in green), then right-click on the <code>src/test/java</code> directory and select <em>Mark directory as -> Test Sources Root</em>.</li>\n</ol>\n<img src="/images/junit_testsourcesroot.png" width="75%"/>\n<ol start="3">\n<li>Open the <em>Edit Configuration</em> menu from the drop-down button in the upper right-hand corner of the window. </li>\n</ol>\n<img src="/images/editconfig.png" width="50%"/>\n<ol start="4">\n<li>Within the <em>Run/Debug Configurations</em> window that appears, click the <code>+</code> button and select <em>JUnit</em> from the drop-down menu.</li>\n</ol>\n<p><img src="/images/junitconfig.png"></p>\n<ol start="5">\n<li>Enter a name for the new <em>Configuration</em> that we are creating (e.g. \'Test\' is given in the example). Within the <em>Test kind</em> field, verify that <em>All in directory</em> is selected. Also, within the <em>Directory</em> field, enter the path to the test directory within your project (e.g. <code>/Users/caius/Workspace/Battleships/main/test/java</code> in the example).</li>\n</ol>\n<img src="/images/junit_runpath.png" width="75%"/>\n<ol start="6">\n<li>At the bottom of the <em>Run/Debug Configurations</em> window is a section called <em>Before launch: Activate tool window.</em> Click the <code>+</code> button and select <em>Build.</em></li>\n</ol>\n<p><img src="/images/junit_build.png"></p>\n<ol start="7">\n<li>Everything for your new <em>Configuration</em> should be set, select <em>OK</em> on the <em>Run/Debug Configurations</em> window. You should now see the name of your new <em>Configuration</em> within the drop-down in the upper right-hand corner of the IntelliJ IDEA window. You can run your new <em>Configuration</em> by selecting the play arrow button.</li>\n</ol>\n<p><img src="/images/junit_run.png"></p>\n<ol start="8">\n<li>Once executed, the results of running the JUnit tests will be presented in a new pane at the bottom of the IntelliJ IDEA window. Results with <em>green</em> checkmarks next to them indicate that the test passed, whereas <em>yellow</em> exclamation marks indicate that a test has failed. Any failed tests will include a brief explanation of why it failed within the right-hand side of the pane (e.g. the testPlaceValid was failed the assertion, because the returned value was <code>false</code>).</li>\n</ol>\n<p><img src="/images/junit_testresults.png"></p>\n<ol start="9">\n<li>For determining code coverage, you will need to run your new <em>Configuration</em> by selecting the <em>Run with Coverage</em> button (which appears as a button with the play icon overlayed on a shield).</li>\n</ol>\n<p><img src="/images/junit_runcoverage.png"></p>\n<ol start="10">\n<li>Once executed, the results of running th JUnit tests will similarly be presented in the test results pane at the bottom of the window. There will also be a <em>Coverage Test</em> pane which contains <em>Class, Method,</em> and <em>Line coverage</em> for each of the directory elements within your project. Please consult the sprint instructions to determine which type of coverage to pay attention to for any particular assignment.</li>\n</ol>\n<img src="/images/junit_coverage.png" width="60%"/>\n<p>These intructions were orignally authored by <a href="http://web.engr.oregonstate.edu/~nelsonni/">Nicholas Nelson</a> for the Fall 2017 offering of this class.</p>',frontmatter:{path:"/resources/idea-testing",title:"Testing Projects with IntelliJ IDEA"}}},pathContext:{}}}});
//# sourceMappingURL=path---resources-idea-testing-6f6ce0d952b4c7137d48.js.map