import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";

class CartTotals extends Component {
    render() {
        return (
            <div>
                <h4 className='text-uppercase my-auto'>Cart Totals</h4>
                <Table bordered className='mt-3'>
                    <tbody>
                    <tr>
                        <td>
                            Products Price
                        </td>
                        <td className='text-left'>
                            ${this.props.totalPrice}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Delivery
                        </td>
                        <td className='text-left'>
                            ${3.50}
                        </td>
                    </tr>

                    <tr>
                        <th>
                            Total
                        </th>
                        <th className='text-left'>
                            ${this.props.totalPrice + 3.50}
                        </th>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CartTotals;