const students = [
    {
      name: "Dantas",
      assessment1: 8,
      assessment2: 6,
    },
    {
      name: "Miguel",
      assessment1: 7.5,
      assessment2: 6.4,
    },
    {
      name: "José",
      assessment1: 7,
      assessment2: 3.8,
    },
    {
     name: "Marina",
     assessment1: 7.2,
     assessment2: 8.4,
    },
  ]
  
  let average;
  
  for(let index = 0; index < students.length; index++){
    average = ((students[index].assessment1 + students[index].assessment2) / 2).toFixed(2);
    if (average >= 7)
    {
      alert(`
      A média do(a) aluno(a) ${students[index].name} é: ${average}
      Parabéns, ${students[index].name}! Você foi aprovado(a) no concurso!
      `)
    }else 
    {
      alert(`
      A média do(a) aluno ${students[index].name} é: ${average}
      Não foi dessa vez, ${students[index].name}! Tente novamente!`)
    }
  }
  
  