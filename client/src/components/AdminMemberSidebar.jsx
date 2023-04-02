import check from "../assets/images/checkmark.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const AdminMemberPage = (props) => {
    const navigate = useNavigate();
    const [budaCrewMemberInfoEdited, setBudaCrewMemberInfoEdited] = useState(false)
    const [videoAdded, setVideoAdded] = useState(false)
    const [musicAdded, setMusicAdded] = useState(false)
    const [memberBannerImgEdited, setMemberBannerImgEdited] = useState(false)
    const [memberBannerVidEdited, setMemberBannerVidEdited] = useState(false)
    const [memberImgEdited, setMemberImgEdited] = useState(false)
    const [musicList, setMusicList] = useState([])
    const [videoList, setVideoList] = useState([])
    const { loggedIn, setLoggedIn, setTracker } = props
    const {
        memberTitle, setMemberTitle,
        upcomingEventsInfo, setUpcomingEventsInfo,
        videoTitle, setVideoTitle,
        videoLink, setVideoLink,
        homeworkInfo, setHomeworkInfo,
        budaCrewInfo, setBudaCrewInfo,
        contactPhone, setContactPhone,
        musicTitle, setMusicTitle,
        musicLink, setMusicLink } = props
    const {
        memberBannerImg,
        memberBannerVid,
        memberBannerVidOrImg,
        setMemberBannerImg,
        setMemberBannerVid,
        setMemberBannerVidOrImg,
        memberImg, setMemberImg } = props
    const baseUrl = process.env.REACT_APP_BASE_URL

    const backOne = () => {
        navigate(-1)
    }


    return (
        <div>

            {/* Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {memberBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={memberBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={memberBannerImg} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-12 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
            </section>

            {/* BUDA Member Section */}
            <section >
                <div className="w-full flex flex-col items-center sm:items-start">
                    <h1 className='welcome  mt-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-xl mb-3 welcome w-full flex justify-center'>Welcome  <span className='text-indigo-500 mx-2'> BUDA </span>  Crew Members!</h1>
                    <h1 className="sm:text-3xl md:text-4xl lg:text-5xl  text-xl mb-3 welcome w-full flex justify-center">Congratulations!!</h1>
                    <p className="mb-3 sm:text-3xl md:text-4xl lg:text-4xl text-sm w-full flex justify-center"> {memberTitle}</p>
                    <p className="mb-3 lg:text-2xl w-full flex justify-center">*please read all*</p>
                    <div className="h-content w-full flex flex-col items-center sm:items-start sm:ml-8">
                        <div className="flex w-11/12 justify-center mb-10">
                            <img className="border-2 border-black flex rounded w-[800px] md:w-[900px] lg:w-[1200px]" src={memberImg} />
                        </div>


                        <div className="w-full p-2 md:text-xl lg:text-2xl">
                            <p className="mb-5">
                                <strong>Upcoming Events: </strong> {upcomingEventsInfo}
                            </p>
                            <p className="mb-5">
                                <strong>Below </strong> you will find important info reagarding all BUDA Crew activites, homework, and videos
                            </p>
                            <p className="mb-5">
                                If you have any issues please call me {contactPhone}
                            </p>
                        </div>


                        <div className="flex flex-col sm:flex-row w-11/12 justify-evenly">
                            <div className="rounded-lg h-[900px] sm:w-2/5 w-11/12 flex flex-col items-center border-2  border-black mb-5">
                                <div className="flex shrink items-center justify-center bg-indigo-200 flex-col w-full h-1/6 p-2 border-b-2 border-black border-double">
                                    <p className="text-2xl welcome md:text-xl lg:text-4xl">Music/Videos:</p>
                                </div>
                                <div className=" w-full h-[355px]  p-2 mb-2 border-b-2 border-black border-double aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"><strong>Music:</strong></p>
                                    {/* {musicList.map((t, i) => {
                                        return (
                                            <div key={i} className="flex justify-between mb-3 aboutInfo md:text-2xl">
                                                <p><a className="text-sky-500 underline" target="_blank" href={t.musicLink}>{t.musicTitle}</a></p>
                                                <button className="bg-red-400 px-2 rounded" onClick={(e) => { handleDeleteOneMusic(e, t._id) }}>Delete</button>
                                            </div>
                                        )
                                    })} */}
                                </div>
                                <div className="w-full h-[390px] p-2 aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"><strong>Videos:</strong></p>
                                    {/* {videoList.map((t, i) => {
                                        return (
                                            <div key={i} className="flex justify-between mb-3 aboutInfo md:text-2xl">
                                                <p><a className="text-sky-500 underline" href={t.videoLink}>{t.videoTitle}</a></p>
                                                <button className="bg-red-400 px-2 rounded" onClick={(e) => { handleDeleteOneVideo(e, t._id) }}>Delete</button>
                                            </div>
                                        )
                                    })} */}
                                </div>
                            </div>

                            <div className="rounded-lg h-[900px] sm:w-2/5 w-11/12 flex flex-col items-center border-2  border-black mb-5">
                                <div className="flex shrink items-center justify-center bg-red-200 flex-col w-full h-1/6 p-2 border-b-2 border-black border-double">
                                    <p className="text-2xl welcome md:text-xl lg:text-4xl">Homework/Info:</p>
                                </div>
                                <div className="flex h-[355px]  flex-col w-full p-2 mb-2 border-b-2 border-black border-double aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"><strong>Info:</strong></p>
                                    <p className="md:text-xl">{budaCrewInfo}</p>
                                </div>
                                <div className="flex  h-[390px] flex-col w-full p-2 aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"> <strong>Homework:</strong> </p>
                                    <p className="md:text-xl">{homeworkInfo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AdminMemberPage;
