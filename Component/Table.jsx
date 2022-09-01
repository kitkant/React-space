import './Style/table.css'



const Table = () =>{
  return(

    <section className="features">
        <div className="overview">
            <h2 className="features-title">Falcon Heavy <br/>Overview</h2>
            <table className="table">
                <tr>
                    <td className="table-column">HEIGHT</td>
                    <td className="table-column">70 m / 229.6 ft</td>
                </tr>
                <tr>
                    <td className="table-column">DIAMETER</td>
                    <td className="table-column">12.2 m / 39.9 ft</td>
                </tr>
                <tr>
                    <td className="table-column">MASS</td>
                    <td className="table-column">1,420,788 kg / 3,125,735 lb</td>
                </tr>
                <tr>
                    <td className="table-column">PAYLOAD TO LEO</td>
                    <td className="table-column">63,800 kg / 140,660 lb</td>
                </tr>
                <tr>
                    <td className="table-column">PAYLOAD TO GTO	</td>
                    <td className="table-column">26,700 kg / 58,860 lb</td>
                </tr>
                <tr>
                    <td className="table-column">PAYLOAD TO MARS</td>
                    <td className="table-column">16,800 kg / 37,040 lb</td>
                </tr>
            </table>
           
            <h2 className="features-title">UNMATCHED <br />PERFORMANCE</h2>
            <p className="features-text">With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.</p>
        </div>
    </section>
 
  )
}
export default Table