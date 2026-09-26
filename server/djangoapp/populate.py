from .models import CarMake, CarModel


def initiate():
    data = {
        "NISSAN": ["Pathfinder", "Qashqai", "XTRAIL"],
        "Mercedes": ["A-Class", "C-Class", "E-Class"],
        "Audi": ["A4", "A5", "A6"],
        "Kia": ["Sorrento", "Carnival", "Cerato"],
        "Toyota": ["Corolla", "Camry", "Kluger"],
    }

    for make_name, models in data.items():
        make, _ = CarMake.objects.get_or_create(
            name=make_name,
            defaults={"description": f"{make_name} vehicles"}
        )

        for model_name in models:
            car_type = "SEDAN" if model_name in ["Cerato", "Corolla", "Camry"] else "SUV"

            CarModel.objects.get_or_create(
                car_make=make,
                name=model_name,
                defaults={
                    "type": car_type,
                    "year": 2023
                }
            )
