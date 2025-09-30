import './App.css';
import StudentItem from "./component/StudentItem";

function App() {
  return (
    <div className="container mt-4">
      <div className="card">
          <div className="card-header">
              <h1>Bang sinh vien</h1>
          </div>
          <div className="card-body">
        <table className="table table-success table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">Ma sinh vien</th>
                    <th scope="col">Ho dem</th>
                    <th scope="col">Ten</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DE180352</td>
                    <td>Vu</td>
                    <td>Binh Minh</td>
                </tr>
                <tr>
                    <td>DE180999</td>
                    <td>Phan</td>
                    <td>Trung Hieu</td>
                </tr>
                <StudentItem />
            </tbody>
        </table>
          </div>
      </div>
    </div>
  );
}

export default App;
