import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { X } from 'lucide-react';

import FormStepper from '../components/form/FormStepper';
import FormNavigation from '../components/form/FormNavigation';
import BasicInformation from '../components/form/BasicInformation';
import MovieDetails from '../components/form/MovieDetails';
import MediaAssets from '../components/form/MediaAssets';
import Availability from '../components/form/Availability';
import SeoPublishing from '../components/form/SeoPublishing';

const STEPS = [
  'Basic Info',
  'Movie Details',
  'Media Assets',
  'Availability',
  'SEO & Publish'
];

export default function MovieFormPage({ onClose, onAddMovie }) {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {}
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data) => {
    if (onAddMovie) {
      onAddMovie(data);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-4xl p-6 shadow-2xl relative my-8">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition cursor-pointer"
        >
          <X size={20} />
        </button>
<FormStepper
steps={STEPS}
currentStep={currentStep}
setCurrentStep={setCurrentStep}/>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            
            <div className="py-4">
              {currentStep === 0 && <BasicInformation />}
              {currentStep === 1 && <MovieDetails />}
              {currentStep === 2 && <MediaAssets />}
              {currentStep === 3 && <Availability />}
              {currentStep === 4 && <SeoPublishing />}
            </div>

            <FormNavigation
              currentStep={currentStep}
              totalSteps={STEPS.length}
              onPrev={handlePrev}
              onNext={handleNext}
              isSubmitting={methods.formState.isSubmitting}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}