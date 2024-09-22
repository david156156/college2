import { FunctionComponent } from "react";

interface ExpensesProps {}

const Expenses: FunctionComponent<ExpensesProps> = () => {
  return (
    <>
      <div className="row">
        <div
          className="card text-bg-success mb-3 col"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Balanc</div>
          <div className="card-body">
            <h5 className="card-title fw-bold h3">46,695</h5>
          </div>
        </div>
        <div
          className="card text-bg-danger mb-3 col"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Wasted This month</div>
          <div className="card-body">
            <h5 className="card-title fw-bold h3">2,505</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
