
function MailBox() {

    const unreadMsg = ["msg1","msg2","msg3"];

    return(
        <div>
            <h2>Mail Box</h2>
            {
                unreadMsg.length > 0 && 
                <b>You have {unreadMsg.length} unread message in your mail box</b>
            }
        </div>
    )
}

export default MailBox;