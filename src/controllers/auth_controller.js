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

async function change_password(req, res) {
    const {email, old_password, new_password} = req.body
    
    if (!old_password || !new_password) {
        throw new Error("Dados incompletos");
        }
    try {
await auth_service.change_password(email, old_password, new_password)
res.status(200).send("Senha alterada com sucesso!");
    } catch (error) {
        return res.status(error.status || 400).json({message: error.message}); 
    }
}

const auth_controller = {
    compare_password, change_password
}

export default auth_controller;