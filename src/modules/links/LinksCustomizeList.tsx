import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { map } from "lodash";

import { LINKS } from "@/constants/links";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Button } from "@/components/ui/button";

import { Links } from "./LinksCustomize";
import { GripHorizontal, Link } from "lucide-react";

import { CSS } from "@dnd-kit/utilities";
import {
	Active,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
} from "@dnd-kit/sortable";

interface Props {
	data: Links;
	onRemove: (id: number) => void;
	onChange: Dispatch<SetStateAction<Links>>;
}

const LinksCustomizeItem = ({
	item,
	onRemove,
}: {
	item: {
		id: number;
	};
	onRemove: (id: number) => void;
}) => {
	return (
		<div className="bg-gray-light p-4">
			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<GripHorizontal size={15} className="text-gray-dark cursor-grab" />
					<h1 className="text-[16px] font-bold text-gray-dark">
						Link# {item.id}
					</h1>
				</div>

				<Button variant="ghost" onClick={() => onRemove(item.id)}>
					Remove
				</Button>
			</div>

			<div className="mt-3 flex flex-col gap-3">
				<div>
					<p className="body-sm">Platform</p>
					<Select source={LINKS} />
				</div>

				<div>
					<p className="body-sm">Link</p>
					<Input
						icon={<Link size={12} />}
						placeholder="e.g. https://www.github.com/johnappleseed"
					/>
				</div>
			</div>
		</div>
	);
};

const SortableItem = ({ item }: { item: { id: number } }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: item.id,
			transition: {
				duration: 150, // milliseconds
				easing: "cubic-bezier(0.25, 1, 0.5, 1)",
			},
		});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<LinksCustomizeItem item={item} onRemove={() => {}} />
		</div>
	);
};

const LinksCustomizeList: React.FC<Props> = ({ data, onChange }) => {
	const [active, setActive] = useState<Active | null>(null);
	const activeItem = useMemo(
		() => data.find((item) => item.id === active?.id),
		[active, data]
	);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	return (
		// <div className="flex flex-col gap-5 max-h-[425px] overflow-y-auto">
		// {map(data, (item) => {
		// 	return (
		// 		<LinksCustomizeItem key={item.id} item={item} onRemove={onRemove} />
		// 	);
		// })}
		// </div>
		<DndContext
			sensors={sensors}
			onDragStart={({ active }) => {
				setActive(active);
			}}
			onDragEnd={({ active, over }) => {
				if (over && active.id !== over?.id) {
					const activeIndex = data.findIndex(({ id }) => id === active.id);
					const overIndex = data.findIndex(({ id }) => id === over.id);

					onChange(arrayMove(data, activeIndex, overIndex));
				}
				setActive(null);
			}}
			onDragCancel={() => {
				setActive(null);
			}}
		>
			<SortableContext items={data}>
				<div className="flex flex-col gap-5 max-h-[425px] max-w-full overflow-y-auto overflow-x-hidden">
					{map(data, (item) => {
						return <SortableItem key={item.id} item={item} />;
					})}
				</div>
			</SortableContext>
		</DndContext>
	);
};

export default LinksCustomizeList;
