import { useEffect, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  onIntersect?: () => void;
  onImpression?: () => void;
}

const useIntersectionObserver = (
	ref: RefObject<HTMLElement>,
	{ threshold, onIntersect, onImpression }: UseIntersectionObserverOptions
) => {
	useEffect(() => {
		let impressionTimeout: ReturnType<typeof setTimeout>;

		if (ref.current) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						if (onIntersect) {
							onIntersect();
						}

						if (onImpression) {
							impressionTimeout = setTimeout(() => {
								onImpression();
							}, 3000);
						}
					} else {
						clearTimeout(impressionTimeout);
					}
				},
				{ threshold: threshold ?? 0.5 }
			);

			observer.observe(ref.current);

			return () => {
				observer.disconnect();
				clearTimeout(impressionTimeout);
			};
		}
	}, [onIntersect, onImpression, ref, threshold]);
};

export default useIntersectionObserver;
