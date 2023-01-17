export function scrollTo(){
    function anonim(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500){
            anonim()
        }
    };
    toggleVisible()
}
