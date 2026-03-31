import React from 'react';
import { cn } from '@/lib/utils';

export type BGVariantType = 'dots' | 'diagonal-stripes' | 'grid' | 'horizontal-lines' | 'vertical-lines' | 'checkerboard';
export type BGMaskType =
	| 'fade-center'
	| 'fade-edges'
	| 'fade-top'
	| 'fade-bottom'
	| 'fade-left'
	| 'fade-right'
	| 'fade-x'
	| 'fade-y'
	| 'none';

type BGPatternProps = React.ComponentProps<'div'> & {
	variant?: BGVariantType;
	mask?: BGMaskType;
	size?: number;
	fill?: string;
};

const maskClasses: Record<BGMaskType, string> = {
	'fade-edges': '[mask-image:radial-gradient(ellipse_at_center,black,transparent)]',
	'fade-center': '[mask-image:radial-gradient(ellipse_at_center,transparent,black)]',
	'fade-top': '[mask-image:linear-gradient(to_bottom,transparent,black)]',
	'fade-bottom': '[mask-image:linear-gradient(to_bottom,black,transparent)]',
	'fade-left': '[mask-image:linear-gradient(to_right,transparent,black)]',
	'fade-right': '[mask-image:linear-gradient(to_right,black,transparent)]',
	'fade-x': '[mask-image:linear-gradient(to_right,transparent,black,transparent)]',
	'fade-y': '[mask-image:linear-gradient(to_bottom,transparent,black,transparent)]',
	none: '',
};

function geBgImage(variant: BGVariantType, fill: string, size: number) {
	switch (variant) {
		case 'dots':
			return `radial-gradient(${fill} 1px, transparent 1px)`;
		case 'grid':
			return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
		case 'diagonal-stripes':
			return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
		case 'horizontal-lines':
			return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
		case 'vertical-lines':
			return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
		case 'checkerboard':
			return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
		default:
			return undefined;
	}
}

const BGPattern = ({
	variant = 'grid',
	mask = 'none',
	size = 40,
	fill = 'rgba(255,255,255,0.05)',
	className,
	style,
	...props
}: BGPatternProps) => {
	const bgSize = `${size}px ${size}px`;
	const backgroundImage = geBgImage(variant, fill, size);

	return (
		<div
			className={cn('absolute inset-0 z-[-10] size-full', maskClasses[mask], className)}
			style={{
				backgroundImage,
				backgroundSize: bgSize,
				...style,
			}}
			{...props}
		/>
	);
};

BGPattern.displayName = 'BGPattern';
export { BGPattern };

export function DemoOne() {
	return (
		<div className="mx-auto max-w-4xl space-y-5 p-8">
			<div className="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2">
				<BGPattern variant="grid" mask="fade-edges" />
				<h2 className="text-3xl font-bold">Grid Background</h2>
				<p className="text-muted-foreground font-mono">With (fade-edges) Mask</p>
			</div>
			<div className="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2">
				<BGPattern variant="dots" mask="fade-center" />
				<h2 className="text-3xl font-bold">Dots Background</h2>
				<p className="text-muted-foreground font-mono">With (fade-center) Mask</p>
			</div>
			<div className="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2">
				<BGPattern variant="diagonal-stripes" mask="fade-y" />
				<h2 className="text-3xl font-bold">Diagonal Stripes</h2>
				<p className="text-muted-foreground font-mono">With (fade-y) Mask</p>
			</div>
			<div className="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2">
				<BGPattern variant="horizontal-lines" mask="fade-right" />
				<h2 className="text-3xl font-bold">Horizontal Lines</h2>
				<p className="text-muted-foreground font-mono">With (fade-right) Mask</p>
			</div>
			<div className="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2">
				<BGPattern variant="vertical-lines" mask="fade-bottom" />
				<h2 className="text-3xl font-bold">Vertical Lines</h2>
				<p className="text-muted-foreground font-mono">With (fade-bottom) Mask</p>
			</div>
			<div className="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2">
				<BGPattern variant="checkerboard" mask="fade-top" />
				<h2 className="text-3xl font-bold">Checkerboard Background</h2>
				<p className="text-muted-foreground font-mono">With (fade-top) Mask</p>
			</div>
		</div>
	);
}
