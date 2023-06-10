import ReactGA from "react-ga";
import ReactGA4 from "react-ga4";


const InitializeGoogleAnalytics = () => {
    const trackingId = process.env.NEXT_PUBLIC_TRACKING_KEY || "G-49KJTY8BW4"; // Google Analytics tracking ID
    // Initialize UA
    ReactGA.initialize(trackingId);
    // Initialize GA4 - Add your measurement ID
    ReactGA4.initialize(trackingId);

    console.log("GA INITIALIZED");
};

const TrackGoogleAnalyticsEvent = (
    category: string,
    action: string,
    label: string
) => {
    console.log("GA event:", category, ":", action, ":", label);
    // Send UA Event
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
    // Send GA4 Event
    ReactGA4.event({
        category: category,
        action: action,
        label: label,
    });
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };