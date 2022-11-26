import video from "../../Assets/video-call-icon.png"
import call from "../../assets/voice-call-icon.png"
import more from "../../Assets/more-icon.png"
import { HeaderContainer, Select, Status } from "./Header.styled"

function Header(props) {
    const { senders, currSender, onChangeSender } = props
    
    return (
        <HeaderContainer>
            <div className="sender-profile">
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="Profile photo" />
                <div>
                    <Select value={currSender} onChange={onChangeSender} >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </Select>
                    <Status>Online</Status>
                </div>
            </div>

            <div className="action-menu">
                <button>
                    <img src={video} alt="Video cam icon" />
                </button>

                <button>
                    <img src={call} alt="Phone call icon" />
                </button>

                <button>
                    <img src={more} alt="More" />
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header