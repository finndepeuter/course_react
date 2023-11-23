import { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import MockApi from '../apis/mock_api';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [iAgree, setIAgree] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      var customer = {
        id,
        firstName,
        lastName,
        iAgree,
      };

      if (id !== '0') {
        await MockApi.put(customer);
      } else {
        await MockApi.post(customer);
      }
    
      navigate(-1);
    } catch (error) {
      console.error("error editing customer")
    }
  }

  useEffect(() => {
    if (id !== 0) {
      getCustomer(id)
    }
  }, [id]);

  const getCustomer = async (id) => {
    const result = await MockApi.getbyid(id);
    const customer = result.data;
    setFirstName(customer.firstName);
    setLastName(customer.lastName);
    setIAgree(customer.iAgree);
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={iAgree} onChange={() => setIAgree(!iAgree)}/>
        </Form.Field>
        <Button type='button' onClick={handleSubmit}>
          {(id === "0") && <>Add</>}
          {(id !== "0") && <>Update</>}
          </Button>
      </Form>
    </div>
  )
}
