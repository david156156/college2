import { FunctionComponent } from "react";

interface StateProps {}
interface accountOperations {
  description: string;
  cost: number;
  month: String;
}

const State: FunctionComponent<StateProps> = () => {
  let accountOperations: accountOperations[] = [
    { description: "Supermarket", cost: 300, month: "December" },
    { description: "Clothing", cost: 250, month: "December" },
    { description: "Electricity", cost: 1000, month: "December" },
    { description: "McDonalds", cost: 235, month: "December" },
    { description: "Taxes", cost: 720, month: "December" },
    { description: "Supermarket", cost: 450, month: "November" },
    { description: "Pizza Hut", cost: 130, month: "November" },
    { description: "Supermarket", cost: 220, month: "October" },
  ];
  return (
    <>
      {accountOperations.length ? (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">description</th>
              <th scope="col">cost</th>
              <th scope="col">month</th>
            </tr>
          </thead>
          <tbody>
            {accountOperations.map((account, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{account.description}</td>
                <td>{account.cost}</td>
                <td>{account.month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-danger">found were expenses No</p>
      )}
    </>
  );
};

export default State;
