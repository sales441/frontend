const API = import.meta.env.VITE_API_BASE_URL; 
// Deve ficar: "https://vikingo-backend-pro-production.up.railway.app/api"

async function handleLogin(e) {
  e.preventDefault();
  setError("");
  setLoading(true);

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok && data?.success && data?.token) {
    localStorage.setItem("token", data.token);
    // redireciona para o dashboard (ajuste a rota se precisar)
    window.location.href = "/dashboard";
  } else {
    setError(data?.message || "Credenciais inválidas");
  }

  setLoading(false);
}
