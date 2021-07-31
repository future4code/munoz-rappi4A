export const goToLogoPage = (history) => {
    history.push("/")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage= (history) => {
    history.push("/cadastro")
}

export const goToAddressPage = (history) => {
    history.push("/endereco")
}

export const goToFeedPage = (history) => {
    history.push("/home")
}

export const goToRestaurantListPage = (history) => {
    history.push("/restaurante/id")
}

export const goToCartPage = (history) => {
    history.push("/meu-carrinho")
}

export const goToProfilePage = (history) => {
    history.push("/meu-perfil")
}

export const goToEditProfilePage = (history) => {
    history.push("/meu-perfil/editar-perfil")
}

export const goToEditAddressPage = (history) => {
    history.push("/meu-perfil/editar-endereco")
}
