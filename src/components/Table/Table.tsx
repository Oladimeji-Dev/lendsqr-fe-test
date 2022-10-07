import React from 'react'
import './Table.scss'
import filterIcon from '../../assets/filter.png'
export const Table = () => {
  return (
    <table>
        <thead>
            <tr>
                <td>
                    <span>organization</span>
                    <span>{filterIcon}</span> 
                    </td>
                <td>
                    <span>Username</span>
                    <span>{filterIcon}</span> 
                </td>
                <td>
                    <span>Email</span>
                    <span>{filterIcon}</span> 
                </td>
                <td>
                    <span>Phone number</span>
                    <span>{filterIcon}</span> 
                </td>
                <td>
                    <span>Date joined</span>
                    <span>{filterIcon}</span> 
                </td>
                <td>
                    <span>Status</span>
                    <span>{filterIcon}</span> 
                </td>
            </tr>
        </thead>
    </table>
  )
}
