import React from 'react'
import { Alert, Col ,Row} from 'react-bootstrap'
import { useState , useEffect} from 'react'

function Newsletter({onValidated, status, message}) {
   const[email,setEmail] = useState('');

   useEffect(()=>{
    if(status==='success'){
        clearFields()
    }
  
   },[status])

   const handleSubmit=(e)=>{
    e.preventDefault();
    email && email.indexOf("@")> -1 && 
    onValidated({
        EMAIL:email
    })

   }

   const clearFields=()=>{
    setEmail('')
   }
  return (
    <Col lg={12}>
        <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h4>Subscribe to my Newsletter</h4>
                    {status === 'sending' && <Alert>'Sending.....'</Alert>}
                    {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                    {status === 'success' && <Alert variant='success'>{message}</Alert>}
                </Col>

                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input  type='email' value={email} placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                            <button type='submit'> Submit </button>
                        </div>
                    </form>

                </Col>

            </Row>

        </div>

    </Col>
  )
}

export default Newsletter
