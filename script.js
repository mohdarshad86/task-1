const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {

    const onboardingCall = React.useRef();
    const googleSearchConsoleAccess = React.useRef();
    const googleAnalyticsAccess = React.useRef();
    const websiteAccess = React.useRef();
    const technicalAudit = React.useRef();
    const anchorTextandSemanticAnalysis = React.useRef();
    const competitorAnalysis = React.useRef();
    const anchorTextURLMapping = React.useRef();
    const googleDataStudioReportLocalReportingSuite = React.useRef();
    const siteLevelOptimization = React.useRef();
    const onPageOptimization = React.useRef();
    const contentCreation = React.useRef();
    const contentPublishing = React.useRef();
    const premiumPressRelease = React.useRef();
    const authorityNichePlacements = React.useRef();
    const reviewManagement = React.useRef();
    const indexLinks = React.useRef();
    const videoRecap = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(onboardingCall.current.value);
        const dataEnteries = {
            onboardingCall: onboardingCall.current.value,
            googleSearchConsoleAccess: googleSearchConsoleAccess.current.value,
            googleAnalyticsAccess: googleAnalyticsAccess.current.value,
            websiteAccess: websiteAccess.current.value,
            technicalAudit: technicalAudit.current.value,
            anchorTextandSemanticAnalysis: anchorTextandSemanticAnalysis.current.value,
            competitorAnalysis: competitorAnalysis.current.value,
            anchorTextURLMapping: anchorTextURLMapping.current.value,
            googleDataStudioReportLocalReportingSuite: googleDataStudioReportLocalReportingSuite.current.value,
            siteLevelOptimization: siteLevelOptimization.current.value,
            onPageOptimization: onPageOptimization.current.value,
            contentCreation: contentCreation.current.value,
            contentPublishing: contentPublishing.current.value,
            premiumPressRelease: premiumPressRelease.current.value,
            authorityNichePlacements: authorityNichePlacements.current.value,
            reviewManagement: reviewManagement.current.value,
            indexLinks: indexLinks.current.value,
            videoRecap: videoRecap.current.value,
        }
        console.log(dataEnteries);
    }
        //Now the input data is available in dataEnteries Object and the data is ready to post to API
        return (
            <div>
                <form >
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    MONTH-1
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Onboarding Call</p>
                                </td>
                                <td>
                                    <input type="text" ref={onboardingCall} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Google Search Console Access</p>
                                </td>
                                <td>
                                    <input type="text" ref={googleSearchConsoleAccess} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Google Analytics Access</p>
                                </td>
                                <td>
                                    <input type="text" ref={googleAnalyticsAccess} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Website Access</p>
                                </td>
                                <td>
                                    <input type="text" ref={websiteAccess} />
                                </td>
                            </tr>
                            <tr><td><p>Technical Audit</p></td>
                                <td>
                                    <input type="text" ref={technicalAudit} />
                                </td></tr>
                            <tr><td><p>Anchor Text and Semantic Analysis</p></td>
                                <td>
                                    <input type="text" ref={anchorTextandSemanticAnalysis} />
                                </td></tr>
                            <tr><td><p>Competitor Analysis</p></td>
                                <td>
                                    <input type="text" ref={competitorAnalysis} />
                                </td></tr>
                            <tr><td><p>Anchor Text / URL Mapping</p></td>
                                <td>
                                    <input type="text" ref={anchorTextURLMapping} />
                                </td></tr>
                            <tr><td><p>Google Data Studio Report + Local Reporting Suite</p></td>
                                <td>
                                    <input type="text" ref={googleDataStudioReportLocalReportingSuite} />
                                </td></tr>
                            <tr><td><p>Site Level Optimization</p></td>
                                <td>
                                    <input type="text" ref={siteLevelOptimization} />
                                </td></tr>
                            <tr><td><p>On Page Optimization</p></td>
                                <td>
                                    <input type="text" ref={onPageOptimization} />
                                </td></tr>
                            <tr><td><p>Content Creation</p></td>
                                <td>
                                    <input type="text" ref={contentCreation} />
                                </td></tr>
                            <tr><td><p>Content Publishing</p></td>
                                <td>
                                    <input type="text" ref={contentPublishing} />
                                </td></tr>
                            <tr><td><p>Premium Press Release</p></td>
                                <td>
                                    <input type="text" ref={premiumPressRelease} />
                                </td></tr>
                            <tr><td><p>Authority Niche Placements</p></td>
                                <td>
                                    <input type="text" ref={authorityNichePlacements} />
                                </td></tr>
                            <tr><td><p>Review Management</p></td>
                                <td>
                                    <input type="text" ref={reviewManagement} />
                                </td></tr>
                            <tr><td><p>Index Links</p></td>
                                <td>
                                    <input type="text" ref={indexLinks} />
                                </td></tr>
                            <tr><td><p>Video Recap</p></td>
                                <td>
                                    <input type="text" ref={videoRecap} />
                                </td></tr>
                        </tbody>
                        <tfoot><tr><th colSpan="2"> <button type="submit" onClick={handleSubmit}>Sumbit Enteries</button></th></tr></tfoot>
                    </table>
                </form>
            </div>);
    }
