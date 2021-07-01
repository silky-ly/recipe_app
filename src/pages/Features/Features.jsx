import DisplayFeatures from "../../components/DisplayFeatures";
import features from "../../features";


const Feature = () => {
    return (
        <>
            <div className='feature'>
                <h1 className='feature-title'>Features</h1>

                <div>
                    {features.map( feature => (
                        <DisplayFeatures feature={feature} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Feature;