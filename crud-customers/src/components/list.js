import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MockApi from '../apis/mock_api';

export default function List() {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const result = await MockApi.get();
    setCustomers(result.data);
  }

  useEffect(() => {
    getCustomers()
  }, []);

  const deleteCustomer = async (id) => {
    await MockApi.delete(id);
    getCustomers();
  }

  return (
    <div>
      <Link to='/create/0'><Button>Create</Button></Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>I Agree</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((customer) => {
            return (
              <Table.Row key={customer.id}>
                <Table.Cell>{customer.firstName}</Table.Cell>
                <Table.Cell>{customer.lastName}</Table.Cell>
                <Table.Cell>{customer.iAgree ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Table.Cell><Link to={'/update/' + customer.id}><Button>Edit</Button></Link></Table.Cell>
                <Table.Cell>
                  <Button onClick={() => deleteCustomer(customer.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}
