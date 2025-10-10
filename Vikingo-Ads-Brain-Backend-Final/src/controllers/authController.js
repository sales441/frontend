export const loginUser = (req, res) => {
  const { email, password } = req.body;
  if (email === 'ivan@depilcompany.com' && password === 'Isabella0101@') {
    return res.json({ success: true, message: 'Login autorizado', user: { name: 'Vikingo', email } });
  } else {
    return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
};