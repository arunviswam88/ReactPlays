const useRestroMenu = (restroId) => {
    const [restroMenu,setRestroMenu] = useState(null);
    useEffect( ()=> {
        fetchMenu();
    },[]);

    fetchMenu = async () => {
        const menu = await fetch(REST_MENU+restroID);
        const menuJSON = await menu.json();
        setRestroMenu(menuJSON); 
    }
    return restroMenu;
}

export default useRestroMenu;