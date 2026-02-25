import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real auth via Lovable Cloud
    if (email === "admin@imagineapps.co" && password === "admin123") {
      localStorage.setItem("ia-admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Marketplace
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-lg bg-primary mx-auto flex items-center justify-center">
            <span className="font-display text-primary-foreground text-2xl leading-none">IA</span>
          </div>
          <h1 className="font-display text-3xl tracking-wider gradient-text">ADMIN PORTAL</h1>
          <p className="font-body text-sm text-muted-foreground">Ingresa tus credenciales para acceder al panel de administración</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6 border border-border">
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-md p-3 text-center">
              <p className="font-body text-sm text-destructive">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="font-body text-sm text-muted-foreground">Correo electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@imagineapps.co"
                required
                className="w-full pl-10 pr-4 py-3 rounded-md bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-body text-sm text-muted-foreground">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 rounded-md bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-primary text-primary-foreground font-body font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Iniciar Sesión
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
