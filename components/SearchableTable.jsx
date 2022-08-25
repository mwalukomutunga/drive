const TableSearch = ({columns, rows}) => {
    const humanize = (value) => {
       const camelMatch = /([A-Z])/g;
       const underscoreMatch = /_/g;
     
       const camelCaseToSpaces = value.replace(camelMatch, " $1");
       const underscoresToSpaces = camelCaseToSpaces.replace(underscoreMatch, " ").toUpperCase();
       const caseCorrected =
         underscoresToSpaces.charAt(0) +
         underscoresToSpaces.slice(1).toLowerCase();
     
       return caseCorrected;
     };

   // function humanize(str) {
   //     return str
   //         .replace(/^[\s_]+|[\s_]+$/g, '')
   //         .replace(/[_\s]+/g, ' ')
   //         .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
   //   }
 return (
   <table id="datatable-buttons" className="table table-striped dt-responsive nowrap w-100">
     <thead className="table-light">
       <tr className="">
         {columns?.map((name, index) => (
           <th key={index} scope="col">
             {humanize(name)}
           </th>
         ))}
       </tr>
     </thead>
     <tbody>
       {rows?.map((item, index) => (
         <tr  key ={index}>
           {columns?.map((tle,idx) => (
             <td key ={idx}>{item[tle]?.toString()}</td>
           ))}
         </tr>
       ))}
     </tbody>
   </table>
 );
};

export default TableSearch;
