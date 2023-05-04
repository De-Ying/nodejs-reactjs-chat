import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
                projectId="111c977c-d270-481f-a38b-d26214c1f2e1"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}} 
            />
        </div>
    )
}

export default ChatsPage