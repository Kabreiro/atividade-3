const fornecedores = [];

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { cnpj, razao, fantasia, endereco, cidade, uf, cep, email, telefone } = req.body || {};
    const erros = [];

    if (!cnpj) erros.push('CNPJ é obrigatório');
    if (!razao) erros.push('Razão Social é obrigatória');
    if (!fantasia) erros.push('Nome Fantasia é obrigatório');
    if (!endereco) erros.push('Endereço é obrigatório');
    if (!cidade) erros.push('Cidade é obrigatória');
    if (!uf) erros.push('UF é obrigatório');
    if (!cep) erros.push('CEP é obrigatório');
    if (!email) erros.push('Email é obrigatório');
    if (!telefone) erros.push('Telefone é obrigatório');

    if (erros.length > 0) {
      res.status(400).json({ erros });
    } else {
      fornecedores.push({ cnpj, razao, fantasia, endereco, cidade, uf, cep, email, telefone });
      res.status(200).json({ mensagem: "Cadastro realizado com sucesso!", fornecedores });
    }
  } else {
    res.status(405).send("Método não permitido.");
  }
};
