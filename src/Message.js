import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import "./Message.css"

const Message = forwardRef(({message,username},ref) => {
    const isuser=username===message.username
    return (
        <div className={`message ${isuser && "message-user"}`} ref={ref}>
            <Card className={isuser?"message-usercard":"message-guestcard"}>
          <CardContent>
              <Typography variant="h5" component="h3">
                  {!isuser && `${message.username || "unknown user"}:`}
                  {message.message}
              </Typography>
          </CardContent>
          </Card>      
        </div>
    )
});

export default Message
