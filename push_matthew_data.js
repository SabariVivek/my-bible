// Run this in browser console when on Matthew 1 to push timeline data
// Make sure you're logged in as admin

if (typeof pushMatthew1TimelineData === 'function') {
    pushMatthew1TimelineData();
} else {
    console.log('pushMatthew1TimelineData function not found. Make sure the script is loaded.');
}