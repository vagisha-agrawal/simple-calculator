import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const table_data = []

export const Maths = ({ table }) => {
  const Operators = [
    {
      id: 1,
      label: '+'
    },
    {
      id: 2,
      label: '-'
    },
    {
      id: 3,
      label: '/'
    },
    {
      id: 4,
      label: '*'
    }
  ]

  const tableHeader = ['#', 'Expression', 'Action']

  let [operand1, setOp1] = useState('0')
  let [operand2, setOp2] = useState('0')
  let [operator, setOperator] = useState('+')
  let [answer, setAnswer] = useState('0')
  const [tableData, setTableData] = useState([])
  // const [count,setCount]=useState(0);

  useEffect(() => {
    calculate(operator)
  }, [operator, operand1, operand2])

  const getText1 = (event) => {
    setOp1(event.target.value)
  }

  const getText2 = (event) => {
    setOp2(event.target.value)
  }

  const getOp = (event) => {
    setOperator(event.target.value)
  }

  const calculate = () => {
    switch (operator) {
      case '-':
        // setCount(count+1)

        setAnswer(parseInt(operand1) - parseInt(operand2))
        break
      case '*':
        setAnswer(parseInt(operand1) * parseInt(operand2))
        break
      case '/':
        let ans = "Can't divide by zero"
        if (operand2 !== '0') {
          ans = parseInt(operand1) / parseInt(operand2)
        }
        setAnswer(ans)
        break
      default:
        setAnswer(parseInt(operand1) + parseInt(operand2))
        break
    }
  }

  const handleClick = () => {
    table_data.unshift({
      label: `${operand1} ${operator} ${operand2} = ${answer}`,
      operand1: operand1,
      operator: operator,
      operand2: operand2,
      answer: answer
    })
    setOp1(0)
    setOp2(0)
    console.log('data: ', table_data)
    localStorage.setItem('calc-data', JSON.stringify(table_data))
    const data_table = JSON.parse(localStorage.getItem('calc-data'))
    setTableData(data_table)
  }

  const handleDelete = (e, index) => {
    /* let data = [...tableData]
    data.splice(index, 1) */
    table_data.splice(index, 1)
    localStorage.setItem('calc-data', JSON.stringify(table_data))
    const data_table = JSON.parse(localStorage.getItem('calc-data'))
    setTableData(data_table)
  }

  const handleUpdate = (e, index) => {
    const history = tableData[index]
    console.log(history)
    setOp1(history.operand1)
    setOp2(history.operand2)
    setOperator(history.operator)
  }

  return (
    <div className='container-fluid'>
      {console.log('test')}
      <h1>Functional Component</h1>
      <div className='row mt-5'>
        <div className='col-3'>
          <input
            type='number'
            className='form-control'
            onChange={getText1}
            value={operand1}
          />
        </div>

        <div className='col-1'>
          <select className='form-control' onChange={getOp} value={operator}>
            {Operators.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='col-3'>
          <input
            type='number'
            className='form-control'
            onChange={getText2}
            value={operand2}
          />
        </div>

        {table && (
          <div className='col-2'>
            <button className='btn btn-primary' onClick={handleClick}>
              =
            </button>
          </div>
        )}
      </div>
      <div className='row justify-content-start mt-5'>
        <div className='col-9'>
          <h1>
            Expression:
            <span className='border border-1 p-2'>
              {operand1} {operator} {operand2} = {answer}
            </span>
          </h1>
        </div>
      </div>
      {table && tableData.length > 0 && (
        <table className='table mt-5'>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index}>
                  <h1>{header}</h1>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((option, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{option.label}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={(e) => handleDelete(e, index)}
                  >
                    Delete
                  </button>
                  <button
                    className='btn btn-primary'
                    onClick={(e) => handleUpdate(e, index, tableData)}
                  >
                    Use this Expr
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
