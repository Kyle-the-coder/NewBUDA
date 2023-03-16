import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, auth, storage } from "../config/Firebase";
import { collection, serverTimestamp, getDoc, deleteDoc, doc, setDoc, onSnapshot } from "firebase/firestore"
import { ref, uploadBytes, listAll, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import ImpInfoModal from "../components/ImpInfoModal";
import card2 from "../assets/images/card2.jpeg"
import card3 from "../assets/images/card3.jpeg"


const LandingPage = () => {
    const [data, setData] = useState({});
    const [show, setShow] = useState(false)


    useEffect(() => {
        const getPhoto = async () => {
            try {
                const docRef = doc(db, "admin", process.env.REACT_APP_ADMIN_ID);
                const docSnap = await getDoc(docRef);
                setData(docSnap.data())
            } catch (error) {
                console.log(error)
            }


        }
        getPhoto()

    }, [])



    console.log(data)

    return (
        <div>
            {/* LP Img Section */}
            <section className="items-center justify-center flex flex-col relative w-full h-screen bg-gradient-to-r from-indigo-400 to-red-300 flex bg-auto bg-contain " >
                <img src={data.img} alt=" Bianca" className="rounded object-cover w-full z-[1] h-full absolute  mix-blend-overlay" />
                <h1 className="welcome sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-3xl font-bold mb-2 relative">Bianca's Urban Dance Academy</h1>
                <a href="/wsp" className="bg-indigo-800 relative   lg:text-2xl text-white px-4 py-3 rounded z-[2] hover:bg-slate-900 hover:text-pink-300 transition-all duration-500">Class Schedule</a>
            </section>


            {/* Welcome Students Section */}
            <section className="w-full flex h-14 my-6  items-center">
                <div className="flex w-full justify-center  mx-auto">
                    <h2 className="welcome  sm:text-xl md:text-3xl lg:text-4xl text-xl font-medium">Welcome Returning and Future Students!</h2>
                </div>
            </section>

            {/* Class Img Link Section */}
            <section className="mb-5">
                <div className="flex w-full h-content  p-2 justify-evenly">

                    {/* Important Info Card */}
                    <div className="w-fit  h-fit rounded">
                        <img className="infoCard rounded hover:drop-shadow-lg  cursor-pointer border-2 border-black sm:w-48 lg:w-64   w-32 h-auto" src={data.card1} onClick={() => setShow(true)} alt="important info card" />
                        {show && <ImpInfoModal show={show} setShow={setShow} />}
                    </div>

                    {/* Buda Crew Info Card */}
                    <div className="rounded w-fit h-fit hover:drop-shadow-lg">
                        <a href="/bcp"><img className="infoCard rounded border-2 border-black cursor-pointer sm:w-48 lg:w-64 w-32" src={data.card2} alt="buda crew info card" /></a>
                    </div>

                    {/* Summer Camp Info Card */}
                    <div className=" w-fit rounded   h-fit hover:drop-shadow-lg ">
                        <a href="/sp"><img className="infoCard rounded lg:w-64  border-2 border-black cursor-pointer sm:w-48 w-32" src={data.card3} alt="summer camp info card" /></a>
                    </div>
                </div>
            </section>


            {/* Video Content Section */}
            {/* <section className="flex flex-col md:flex-row  justify-evenly m-0 items-center md:items-start mb-7">

                <video className="rounded mb-2 md:m-0  border-2 border-red-200 md:w-[600px] w-[700px]" loop muted autoPlay controls='' src={landingPageVid1}></video>
                <video className="rounded h-full m-0 border-2 border-indigo-300 md:w-[650px] w-[700px]" loop muted autoPlay controls='' src={landingPageVid2}></video>

            </section> */}
            {/* EDIT LANDING PAGE CARDS 1, 2, AND 3 */}
            {/* <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageVid1}>
                        <h1 className="text-2xl mb-8 welcome">Edit Video 1:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageVid1(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpVid1Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageVid2}>
                        <h1 className="text-2xl mb-8 welcome">Edit Video 2:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageVid2(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpVid2Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section> */}

        </div>
    )
}

export default LandingPage;