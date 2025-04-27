export type CardProps = {
	title: string;
	description: string;
	children: React.ReactNode;

	// footer related
	okText?: string;
	actions?: boolean;
	okSubtext?: React.ReactNode;
};
