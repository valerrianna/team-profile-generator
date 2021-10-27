// const generateManager = () => {
//   return `
//   <div class="col-4 mt-4">
//   .map(({ name, description, languages, link })
//   <div class="card h-100">
//       <div class="card-header">
//           <h3>${managerInput}</h3>
//           <h4>Manager</h4><i class="material-icons">content_paste</i>
//       </div>

//       <div class="card-body">
//           <p class="id">ID: ${idInput}</p>
//           <p class="email">Email: <a href="mailto:${emailInput}">${emailInput}</a></p>
//           <p class="office">Office Number: ${officeNumberInput}</p>
//       </div>
//   </div>
// </div>
//   `;
// }

const generateEmployees = employeesArr => {
    return `
    <div>
    ${employeesArr
        .filter(({role} ) => role === "Manager")
        .map(({ name, id, email, officeNumberInput }) => {
          return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>

                <div class="card-body">
                    <p class="id">ID: ${id}</p>
                    <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                    <p class="office">Office Number: ${officeNumberInput}</p>
                </div>
            </div>
        </div>
          `;
        })
        .join('')}
        ${employeesArr
          .filter(({ role}) => role === "Engineer")
          .map(({ name, id, email, github }) => {
            return `
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${name}</h3>
                        <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                    </div>

                    <div class="card-body">
                        <p class="id">ID: ${id}</p>
                        <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="github">Github: <a href="https://github.com/${github}">${github}</a></p>
                    </div>
                </div>
            </div>
          `;
          })
        .join('')}
        ${employeesArr
          .filter(({ role }) => role === "Intern")
          .map(({ name, id, email, school }) => {
            return `
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${name}</h3>
                        <h4>Intern</h4><i class="material-icons">assignment_ind</i>
                    </div>

                    <div class="card-body">
                        <p class="id">ID: ${id}</p>
                        <p class="email">Email:<a href="mailto:${email}">${email}</a></p>
                        <p class="school">School: ${school}</p>
                    </div>
                </div>
            </div>
        `;
        })
        .join('')}
    </div>
  `;
};
        
 

module.exports = templateData => {
    console.log(templateData);
    const { lists, managerName, id, email, officeNumber } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
  
    <body>
      <header class="p-3 mb-2 bg-danger">
        <h1 class="text-center text-lg-start fw-bold text-white">My Team<h1>
      </header>

      <section>
      
        <div class="col-4 mt-4">
          <div class="card h-100">

            <div class="card-header">
              <h3>${managerName}</h3>
              <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
              <p class="id">ID: ${id}</p>
              <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
              <p class="office">Office Number: ${officeNumber}</p>
            </div>
            
          </div>
        </div>
      ${generateEmployees(lists)}
      </section>

    </body>
    </html>
    `;
}