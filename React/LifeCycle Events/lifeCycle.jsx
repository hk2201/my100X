function App() {
    /*
    So whenever the app runfs for the first time the mounted line will run and when it unmounts then the unmounted line will run.

    And now when there is change in the dependency then first the cleanup happens that is the unmounted line will run first then the mounted code will run and this will happen everytime when the useEffect is called due to change in the dependency array.


    So a life cycle event is like whenever a component mounts and unmounts something like that.
    */

    useEffect(() => {
        console.log("Componented Mounted");

        return () => {
            console.log("Component Unmounted");
        }
    }, [dependency])

    return (
        <div>Hello World</div>
    )
}