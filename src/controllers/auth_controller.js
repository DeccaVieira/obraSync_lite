import auth_service from "../services/auth_service.js";

async function compare_password(req, res) {
    const {email, password} = req.body;
if (!email || !password) {
    throw new Error("Dados inválidos!");
    }
    try {
      const token = await auth_service.compare_password(email, password);
res.status(200).send({token: token, message: "Login realizado com sucesso!"})
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message || "Erro inesperado"
        });
    }
}

const auth_controller = {
    compare_password
}

export default auth_controller;