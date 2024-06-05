
export const FormValidation = (data: any) => {
    return !data?.data && <div style={{ color: 'red' }}>This Field Is Required</div>
};

export const SocialLinkValidation = (data: any) => {
    const hasBeginning = data?.data?.includes('https://') ?? '';
    return !hasBeginning && <div style={{ color: 'red' }}>Please add https://</div>;
};