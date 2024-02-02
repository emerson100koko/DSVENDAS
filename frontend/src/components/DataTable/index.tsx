

const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Darkseid</td>
                        <td>30</td>
                        <td>22</td>
                        <td>13500.00</td>
                    </tr>
                    <tr>
                        <td>09/01/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>28/10/2020</td>
                        <td>Hal Jordan</td>
                        <td>55</td>
                        <td>31</td>
                        <td>20000.00</td>
                    </tr>
                    <tr>
                        <td>01/12/2023</td>
                        <td>Dick Grayson</td>
                        <td>10</td>
                        <td>9</td>
                        <td>9099.00</td>
                    </tr>
                    <tr>
                        <td>02/01/2024</td>
                        <td>Vixen</td>
                        <td>22</td>
                        <td>09</td>
                        <td>10099.01</td>
                    </tr>
                    <tr>
                        <td>17/07/2023</td>
                        <td>Barbara Gordon</td>
                        <td>50</td>
                        <td>40</td>
                        <td>30000.00</td>
                    </tr>
                    <tr>
                        <td>29/12/2021</td>
                        <td>Ravena</td>
                        <td>05</td>
                        <td>05</td>
                        <td>5000.00</td>
                    </tr>
                    <tr>
                        <td>28/11/2020</td>
                        <td>Jay Garrick</td>
                        <td>40</td>
                        <td>15</td>
                        <td>9999.10</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default DataTable;
