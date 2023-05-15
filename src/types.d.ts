//Nflex.vue
export type OptionsNFlex = {
    width: string;
    height: string;
    justify: string;
    align: string;
    direction: string;
    gap: string;
    wrap: string;
};

//NCard.vue
export type OptionsNCard = {
    bg?: string;
    border?: string;
    size?: string;
};

//NButton.vue
export type OptionsNButton = {
    bg?: string;
    text?: string;
    size?: string;
};

//NBadge.vue
export type OptionsNBadge = {
    size: string;
    bg: string;
    textColor: string;
};

//NAlert.vue
export type OptionsNAlert = {
    variant: string;
};

//NInput.vue
export type OptionsNInput = {
    type?: string;
    variant?: string;
};

//NLoading.vue
export type OptionsNLoading = {
    bg: string;
    spinner: string;
    corner: string;
    size: string;
};

//NModal.vue
export type OptionsNModal = {
    bg?: string;
    modal?: string;
    size?: string;
    blur?: boolean;
};

//NNav.vue
export type OptionsNNav = {
    justify: string;
};

//NNotify.vue
export type OptionsNNotify = {
    isOpen?: boolean;
    variant?: string;
};

//NProgress.vue
export type OptionsNProgress = {
    size?: string;
    percentage: string;
    width?: string;
    color?: string;
};

//NAccordion.vue
export type OptionsNAccordion = {
    items: Array<{
        title: string;
        text: string;
        bg: string;
        bgText: string;
        isOpen: boolean;
    }>;
    bg: string;
    bgText: string;
};

export type OptionsNCheckbox = {
    color: string;
    unClickColor: string;
};
