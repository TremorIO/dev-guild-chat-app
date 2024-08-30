import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow customCSS=".ce-chat .ce-chat-window { background-color: red; }"
                projectId='55f458cc-90cc-4990-bad8-b96629fdd782'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%', background: 'url(./assets/8-UNxxFS0b3Ej9x5j.png)'}}
                />
        </div>
    );
};

export default ChatsPage;