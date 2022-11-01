//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    console.log($('#getNavbarPlaceholder').load('./text/nav_lab.html'));
    console.log($('#getFooterPlaceholder').load('./text/footer_lab.html'));
}
loadSkeleton();  //invoke the function
