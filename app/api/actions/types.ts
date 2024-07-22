export interface ActionGetResponse {
    icon: string;
    title: string;
    description: string;
    label: string;
    disabled?: boolean;
    links?: {
        actions: LinkedAction[];
    };
    error?: ActionError;
}

export interface LinkedAction {
    href: string;
    label: string;
    parameters?: ActionParameter;
}

export interface ActionParameter {
    name: string;
    label?: string;
    required?: boolean;
}

export interface ActionError {
    message: string;
}
